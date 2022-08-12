import React, { Component } from "react";
const colorText = {
color: "white"
}
export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p style={colorText}> 
			Made with <i className="fa fa-heart text-danger" /> by Santiago for {""}
			<a href="http://www.4geeksacademy.com">4Geeks Academy</a>
		</p>
	</footer>
);
