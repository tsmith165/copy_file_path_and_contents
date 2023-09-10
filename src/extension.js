import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.copyFilePathAndContent', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) return; // No open text editor

        const doc = editor.document;
        
        const workspaceFolders = vscode.workspace.workspaceFolders;
        if (!workspaceFolders) return; // No workspace is opened

        const workspaceRoot = workspaceFolders[0].uri.fsPath;
        const relativePath = path.relative(workspaceRoot, doc.fileName);
        const content = doc.getText();

        const copyString = `
/${relativePath}
\`\`\`
${content}
\`\`\`
`;

        await vscode.env.clipboard.writeText(copyString);
        vscode.window.showInformationMessage('File path and content copied to clipboard!');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
