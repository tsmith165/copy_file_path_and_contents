const vscode = require('vscode');
const path = require('path');

function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.copyFilePathAndContent', async (_, files) => {
        await copyFilePathAndContent(files, false);
    });

    context.subscriptions.push(disposable);

    vscode.commands.registerCommand('extension.copyOpenTabsPathAndContent', async () => {
        const activeTabGroup = vscode.window.tabGroups.activeTabGroup;
        console.log('Active Tab Group:', activeTabGroup);
        const openTabUris = [];
        for (const tab of activeTabGroup.tabs) {
            console.log('Tab:', tab);
            console.log('Tab Input:', tab.input);
            console.log('Tab Input Type:', typeof tab.input);
            if (tab.input && tab.input.uri instanceof vscode.Uri) {
                console.log('Found Tab URI:', tab.input.uri);
                openTabUris.push(tab.input.uri);
            }
        }
        console.log('Open Tab URIs:', openTabUris);
        await copyFilePathAndContent(openTabUris, false);
    });

    vscode.commands.registerCommand('extension.copySelectedTabPathAndContent', async (_, file) => {
        console.log('Selected File:', file);
        await copyFilePathAndContent([file], false);
    });

    vscode.commands.registerTextEditorCommand('extension.copyCurrentFilePathAndContent', async (editor) => {
        await copyFilePathAndContent([editor.document.uri], false);
    });
}

async function copyFilePathAndContent(files, withDivider) {
    if (!files || files.length === 0) {
        vscode.window.showInformationMessage('No file(s) selected.');
        return;
    }

    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders) {
        vscode.window.showInformationMessage('No workspace is opened.');
        return;
    }

    const workspaceRoot = workspaceFolders[0].uri.fsPath;

    const fileNames = files.map((file) => path.basename(file.fsPath)).join(', ');
    const selectedOption = await vscode.window.showQuickPick(['Copy Path / Contents', 'Copy Path / Contents w/ Divider'], {
        placeHolder: `Selected file(s): ${fileNames}`,
    });

    if (!selectedOption) return;

    const copyStrings = [];

    for (const [index, fileUri] of files.entries()) {
        const normalizedPath = path.relative(workspaceRoot, fileUri.fsPath).split(path.sep).join('/');
        const fileContent = (await vscode.workspace.fs.readFile(fileUri)).toString();

        let copyString = `// /${normalizedPath}\n${fileContent}`;

        if (withDivider || selectedOption === 'Copy Path / Contents w/ Divider') {
            copyString = `// /${normalizedPath}\n---\n${fileContent}\n---`;
        }

        copyStrings.push(copyString);

        if (index < files.length - 1) {
            copyStrings.push('\n\n');
        }
    }

    await vscode.env.clipboard.writeText(copyStrings.join(''));
    vscode.window.showInformationMessage('File path(s) and content(s) copied to clipboard!');
}

function deactivate() {}

module.exports = {
    activate,
    deactivate,
};
