import "./styles.css";
import $ from "jquery";

let content = `
<div class="content">
	<img id="logo" src="//stealjs.com/img/steal-landing-page-logo.jpg">
	<p class="quote">Futuristic JavaScript dependency loader and builder</p>
</div>`;

$('.container').html(content);
