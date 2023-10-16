const vscode = require('vscode');
const path = require('path');

function activate(context) {
    let disposable = vscode.commands.registerCommand(
        'extension.copyFilePathAndContent',
        async () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) return; // No open text editor

            const doc = editor.document;

            const workspaceFolders = vscode.workspace.workspaceFolders;
            if (!workspaceFolders) return; // No workspace is opened

            const workspaceRoot = workspaceFolders[0].uri.fsPath;

            const normalizedPath = path
                .relative(workspaceRoot, doc.fileName)
                .split(path.sep)
                .join('/');
            const trimmedContent = doc.getText().replace(/\s+$/g, ''); // removes trailing whitespace (including newlines)

            const copyString = `
/${normalizedPath}
\`\`\`
${trimmedContent}
\`\`\`
`;

            await vscode.env.clipboard.writeText(copyString);
            vscode.window.showInformationMessage('File path and content copied to clipboard!');
        }
    );

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate,
};
