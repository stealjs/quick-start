import "./styles.css";
import $ from "jquery";

let stealLogo = $('<img>').attr('id', 'logo')
                          .attr('src', '//stealjs.com/img/steal-landing-page-logo.jpg');

let stealDesc = $('<p>').addClass('quote')
                        .text('Futuristic JavaScript dependency loader and builder');

$('.container').append(stealLogo)
               .append(stealDesc)
               .wrapInner('<div class="content">');
