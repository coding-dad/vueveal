<template>
	<div id="app">
		<div class="reveal">
			<div class="slides">
				<r-section>
					<h2>vueveal</h2>
					<h5>Vue.js components for Vue.js</h5>
					<r-fragment :type="FRAGMENT_TYPES.RED">...work in progress</r-fragment>
				</r-section>
				<r-section>
					<h4>&lt;r-cols /></h4>
					<r-section>
						<r-fragment>Create content in two columns</r-fragment>
						<r-fragment>Every column's root element must have a slot-attribute with value left | right</r-fragment>
					</r-section>
					<r-section>
						<div>Example</div>
						<r-cols>
							<div slot="left">
								<r-code line-numbers :trim="true" :font-percent="60" :maxHeight="420">
									<textarea>
							<r-cols>
								<div slot="left">Lorem ipsum</div>
								<div slot="right">
									<img src="https://picsum.photos/200/300" />
								</div>
							</r-cols>
							</textarea>
								</r-code>
							</div>
							<div slot="right">
								<r-cols>
									<div slot="left">Lorem ipsum</div>
									<div slot="right">
										<img src="https://picsum.photos/200/300" />
									</div>
								</r-cols>
							</div>
						</r-cols>
					</r-section>
				</r-section>
				<r-section>
					<h2>Vue.js Component Example</h2>
					<ex-one />
					<p>Hover your mouse pointer over the rectangle</p>
				</r-section>
				<r-section
					bg-image="https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
					bg-size="cover"
				>
					<h1>All About Bananas</h1>
					<p>Thanks for the photo...</p>
					<r-fragment :type="FRAGMENT_TYPES.FADE_LEFT">Photo by Aleksandar Pasaric from Pexels</r-fragment>
				</r-section>
				<r-section
					bg-image="https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
					bg-size="cover"
				>
					<h4>All About Bananas</h4>
					<r-section>
						<h1>Color</h1>
						<div>...</div>
					</r-section>

					<r-section>
						<h1>Taste</h1>
						<div>...</div>
					</r-section>
					<r-section>
						<h1>Peel</h1>
						<div>...</div>
					</r-section>
				</r-section>
				<r-section>
					<r-note>Dies ist eine Folie mit Code.</r-note>
					<h2>&lt;r-code /></h2>
					<r-code line-numbers :trim="false" :font-percent="80" :maxHeight="420">
						<textarea>


import React, { useState } from 'react';

function Example() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<p>You clicked {count} times</p>
			<button @click="() => 'lalala'">
				Click me
			</button>
		</div>
	);
}
						</textarea>
					</r-code>
				</r-section>
				<r-section>
					<h2>&lt;r-fragment part="1" /></h2>
					<r-fragment :type="FRAGMENT_TYPES.GROW">
						<b style="color:orange">fragment GROW</b>
					</r-fragment>
					<r-fragment :type="FRAGMENT_TYPES.SHRINK">fragment SHRINK</r-fragment>
				</r-section>
				<r-section>
					<h2>&lt;r-fragment part="2" /></h2>
					<r-fragment :type="FRAGMENT_TYPES.FADE_OUT">fragment fade-OUT</r-fragment>
					<r-fragment :type="FRAGMENT_TYPES.FADE_UP">fragment fade-UP</r-fragment>
					<r-fragment :type="FRAGMENT_TYPES.FADE_DOWN">fragment fade-DOWN</r-fragment>
					<r-fragment :type="FRAGMENT_TYPES.FADE_RIGHT">fragment fade-RIGHT</r-fragment>
					<r-fragment :type="FRAGMENT_TYPES.FADE_LEFT">fragment fade-LEFT</r-fragment>
				</r-section>
				<r-section>
					<h2>&lt;r-fragment part="3" /></h2>
					<r-fragment :type="FRAGMENT_TYPES.FADE_IN_OUT">fragment fade-IN_OUT</r-fragment>
					<r-fragment :type="FRAGMENT_TYPES.FADE_IN_SEMI_OUT">fragment fade-IN_SEMI_OUT</r-fragment>
				</r-section>
				<r-section>
					<h2>&lt;r-fragment part="4" /></h2>
					<r-fragment :type="FRAGMENT_TYPES.BLUE_ONCE">fragment fade - BLUE ONCE</r-fragment>
					<r-fragment :type="FRAGMENT_TYPES.RED">fragment fade - RED</r-fragment>
					<r-fragment :type="FRAGMENT_TYPES.GREEN">fragment fade - GREEN</r-fragment>
					<r-fragment :type="FRAGMENT_TYPES.BLUE">fragment fade - BLUE</r-fragment>
				</r-section>

				<r-section-markdown>
					## &lt; r-section-markdown />
					* one
					* two
					* three
				</r-section-markdown>

				<r-section>
					<h1>The End.</h1>
				</r-section>
			</div>
		</div>
	</div>
</template>

<script>
/* global RevealChalkboard */
/* eslint-disable no-mixed-spaces-and-tabs */

import RSection from "./components/RSection";
import RSectionMarkdown from "./components/RSectionMarkdown";
import RFragment, { FRAGMENT_TYPES } from "./components/RFragment";
import RCode from "./components/RCode";
import RNote from "./components/RNote";
import RCols from "./components/RCols";

import ExOne from "./example-components/ExOne";

export default {
	name: "App",
	components: {
		RSection,
		RSectionMarkdown,
		RFragment,
		RCode,
		RNote,
		RCols,

		ExOne
	},

	data: () => ({
		FRAGMENT_TYPES
	}),

	created() {
		this.$RHelper.setTheme("black");
	},

	mounted() {
		this.$RHelper.init(
			{
				chalkboard: {
					// optionally load pre-recorded chalkboard drawing from file
					// src: "chalkboard.json"
				},
				dependencies: [
					{
						src: "plugin/markdown/marked.js",
						condition: function() {
							return !!document.querySelector("[data-markdown]");
						}
					},
					{
						src: "plugin/markdown/markdown.js",
						condition: function() {
							return !!document.querySelector("[data-markdown]");
						}
					},
					{ src: "plugin/highlight/highlight.js", async: true },
					{ src: "plugin/search/search.js", async: true },
					{ src: "plugin/zoom-js/zoom.js", async: true },
					{ src: "plugin/notes/notes.js", async: true },
					{ src: "plugin/chalkboard/chalkboard.js" }
				],
				keyboard: {
					67: function() {
						RevealChalkboard.toggleNotesCanvas();
					}, // toggle notes canvas when 'c' is pressed
					66: function() {
						RevealChalkboard.toggleChalkboard();
					}, // toggle chalkboard when 'b' is pressed
					46: function() {
						RevealChalkboard.clear();
					}, // clear chalkboard when 'DEL' is pressed
					8: function() {
						RevealChalkboard.reset();
					}, // reset chalkboard data on current slide when 'BACKSPACE' is pressed
					68: function() {
						RevealChalkboard.download();
					} // downlad recorded chalkboard drawing when 'd' is pressed
				}
			},
			{
				slideNumber: true,
				hash: true,
				mouseWheel: true
			}
		);
	}
};
</script>

<style>
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		/* margin-top: 60px; */
		height: 100vh;
	}
</style>
