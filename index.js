import "./styles.css";
import $ from "jquery";

let content = `
<div class="content">
	<img id="logo" src="//stealjs.com/docs/static/node_modules/bit-docs-docjs-theme/static/img/StealJS-Logo-V2.svg">
	<p class="quote">Futuristic JavaScript dependency loader and builder</p>
</div>`;

$('.container').html(content);
