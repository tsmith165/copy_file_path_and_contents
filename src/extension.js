const vscode = require('vscode');
const path = require('path');

function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.copyFilePathAndContent', async (_, files) => {
        await copyFilePathAndContent(files);
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
        await copyFilePathAndContent(openTabUris);
    });

    vscode.commands.registerCommand('extension.copySelectedTabPathAndContent', async (_, file) => {
        console.log('Selected File:', file);
        await copyFilePathAndContent([file]);
    });

    vscode.commands.registerTextEditorCommand('extension.copyCurrentFilePathAndContent', async (editor) => {
        await copyFilePathAndContent([editor.document.uri]);
    });
}

async function copyFilePathAndContent(files) {
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

    const copyStrings = [];

    for (const [index, fileUri] of files.entries()) {
        const normalizedPath = path.relative(workspaceRoot, fileUri.fsPath).split(path.sep).join('/');
        const fileContent = (await vscode.workspace.fs.readFile(fileUri)).toString();

        const copyString = `// File ${index + 1}: /${normalizedPath}\r\n\r\n${fileContent}`;

        copyStrings.push(copyString);

        if (index < files.length - 1) {
            copyStrings.push('\n\n');
        }
    }

    await vscode.env.clipboard.writeText(copyStrings.join(''));
}

function deactivate() {}

module.exports = {
    activate,
    deactivate,
};
