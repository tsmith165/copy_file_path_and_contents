# Copy File Path and Content

[![Version](https://img.shields.io/visual-studio-marketplace/v/TorreySmith.copyfilepathandcontent)](https://marketplace.visualstudio.com/items?itemName=TorreySmith.copyfilepathandcontent)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/TorreySmith.copyfilepathandcontent)](https://marketplace.visualstudio.com/items?itemName=TorreySmith.copyfilepathandcontent)
[![Rating](https://img.shields.io/visual-studio-marketplace/r/TorreySmith.copyfilepathandcontent)](https://marketplace.visualstudio.com/items?itemName=TorreySmith.copyfilepathandcontent)

![Copy File Path and Contents logo](images/copy_full.png)

## Description

The "Copy File Path and Content" extension for Visual Studio Code provides a convenient way to copy the file path and its content to the clipboard. With this extension, you can easily share code snippets, file paths, or entire file contents with others, directly from your VS Code editor.

## Features

-   Copy the file path and content of the current file in the editor
-   Copy the file path and content of selected files in the file explorer
-   Copy the file path and content of all open tabs in the editor
-   Two formatting options:
    -   Copy path and content
    -   Copy path and content with divider
-   Keyboard shortcuts:
    -   `ctrl+alt+c` to quickly copy the current file path and content
    -   `ctrl+alt+o` to quickly copy the file path and content of all open tabs

## Installation

1. Open Visual Studio Code
2. Go to the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X`)
3. Search for "Copy File Path and Content"
4. Click on the "Install" button
5. Restart VS Code (if prompted)

## Usage

### Copy Current File Path and Content

1. Open a file in the VS Code editor
2. Right-click on the editor title or use the `ctrl+alt+c` keyboard shortcut
3. Select "Copy File Path and Content" from the context menu
4. Choose the desired formatting option
5. The file path and content will be copied to the clipboard

### Copy Selected Files Path and Content

1. In the VS Code file explorer, select one or multiple files
2. Right-click on the selected file(s)
3. Select "Copy File Path and Content" from the context menu
4. Choose the desired formatting option
5. The file path(s) and content(s) will be copied to the clipboard

### Copy Open Tabs Path and Content

1. Right-click on any file tab in the editor or use the `ctrl+alt+o` keyboard shortcut
2. Select "Copy Open Tabs Path and Content" from the context menu
3. Choose the desired formatting option
4. The file path(s) and content(s) of all open tabs will be copied to the clipboard

## Configuration

This extension does not require any additional configuration. It works out of the box with the default settings.

## Custom Keybindings

Visual Studio Code allows you to set custom keybindings for extension commands directly within the IDE.
To customize the keybindings for "Copy File Path and Content" commands:

1. Open the Keyboard Shortcuts editor in VS Code by going to "File" > "Preferences" > "Keyboard Shortcuts"
2. Search for the desired command using: "extension.copy"
3. Click on the "Keybinding" cell for the command you want to edit the shortcut for.
4. Press the desired key combination for the custom keybinding.
5. If there are any conflicts with existing keybindings, VS Code will prompt to resolve them.
6. The custom keybinding will be added to your keybindings.json file.

Feel free to customize the keybindings to suit your preferences!

## Feedback and Support

If you encounter any issues, have suggestions, or need assistance, please feel free to:

-   Open an issue on the [GitHub repository](https://github.com/tsmith165/copy_file_path_and_contents/issues)
-   Contact the extension author via email at tas.smity@yahoo.com

We appreciate your feedback and are committed to improving the extension based on your input.

## Release Notes

### 1.0.0

-   Initial release of the "Copy File Path and Content" extension
-   Added support for copying file path and content of the current file, selected files, and open tabs
-   Introduced two formatting options: with and without divider
-   Implemented keyboard shortcuts (`ctrl+alt+c` and `ctrl+alt+o`) for quick access

---

We hope you find this extension useful and enjoy using it in your development workflow. If you like the extension, please consider giving it a rating and review in the Visual Studio Code Marketplace.

Happy coding!
