import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

export default class MyPlugin extends Plugin {
	async onload() {
		// This adds an editor command that can perform some operation on the current editor instance
		this.addCommand({
			id: '居中',
			name: '居中',
			editorCallback: (editor: Editor, view: MarkdownView) => {
			  const sel = editor.getSelection()
			  editor.replaceSelection("<center>"+sel+"</center>");
			},
		  }
		);
		this.addCommand({
			id: '视频',
			name: '视频',
			editorCallback: (editor: Editor, view: MarkdownView) => {
			  const sel = editor.getSelection()
			  editor.replaceSelection("<video playsinline=\"\" controls=\"\" preload=\"metadata\" src=\""+sel+"\" style=\"display: block; width: 100%;\"></video>");
			},
		  }
		);

		// If the plugin hooks up any global DOM events (on parts of the app that doesn't belong to this plugin)
		// Using this function will automatically remove the event listener when this plugin is disabled.
		this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
			console.log('click', evt);
		});

		// When registering intervals, this function will automatically clear the interval when the plugin is disabled.
		this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));
	}

	onunload() {

	}
}
