The main function of a browser is to present the web resource you choose, by requesting it from the server and displaying it in the browser window.
The location of the resource is specified by the user using a URI (Uniform Resource Identifier).

<img src="../images/browser_components.webp">

Browser main compenents are 

The user interface: 
	this includes the address bar, back/forward button, bookmarking menu, etc. 

The browser engine: 
	actions between the UI and the rendering engine.

The rendering engine: 
	responsible for displaying requested content. 
	For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.
	
Networking: 
	for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.
	
UI backend: 
	used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific.
	Underneath it uses operating system user interface methods.
	
JavaScript interpreter: 
	Used to parse and execute JavaScript code.

Data storage:
	This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. 
	Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.


Rendering engines:

Different browsers use different rendering engines: Internet Explorer uses Trident, 
Firefox uses Gecko, Safari uses WebKit. Chrome and Opera (from version 15) use Blink, a fork of WebKit.
<img src="../images/rendering_engine.webp">

Basic flow of rendering engine.
	The rendering engine will start parsing the html document and converts elements to document nodes in a tree called "content tree". 
	The styling sheet and HTML will be used to create another trees i.e Render tree. Render tree has attributes like color and dimnesions which helps the content to be displyed on the screen.
	After the render tree is constructed it goes to a "layout process". This helps each node the exact cordinates where it should be displayed.
	
	Use:
	It will not wait until all HTML is parsed before starting to build and layout the render tree. Parts of the content will be parsed and displayed, 
	while the process continues with the rest of the contents that keeps coming from the network.
	
	It will help to work asynchronusly.



Parsing:
Parsing a document means translating it to a structure the code can use. 
The result of parsing is usually a tree of nodes that represent the structure of the document. 
This is called a parse tree or a syntax tree.

Parsing can be separated into two sub processes: lexical analysis and syntax analysis.

lexical analysis:
	Lexical analysis is the process of breaking the input into tokens. Tokens are the language vocabulary: the collection of valid building blocks. 
Syntax Rules:
	Syntax analysis is the applying of the language syntax rules.


<img src="../images/WebKit_main.webp">
	



Html Parser:
    The job of the HTML parser is to parse the HTML markup into a parse tree.HTML cannot easily be defined by a context free grammar that parsers need. There is a formal format for defining HTML - DTD (Document Type Definition) - but it is not a context free grammar.HTML cannot be parsed easily by conventional parsers, since its grammar is not context free. HTML cannot be parsed by XML parsers.

    DOM:
    The output tree (the "parse tree") is a tree of DOM element and attribute nodes. DOM is short for Document Object Model. It is the object presentation of the HTML document and the interface of HTML elements to the outside world like JavaScript.

    The DOM has an almost one-to-one relation to the markup. For example:

    <html>
    <body>
        <p>
        Hello World
        </p>
        <div> <img src="example.png"/></div>
    </body>
    </html>

<img src="../images/DOM_tree.webp">

    Figure : DOM tree of the example markup

The parsing algorithm #
As we saw in the previous sections, HTML cannot be parsed using the regular top down or bottom up parsers.

The reasons are:

1) The forgiving nature of the language.
2) The fact that browsers have traditional error tolerance to support well known cases of invalid HTML.
3) The parsing process is reentrant. For other languages, the source doesn't change during parsing, but in HTML, dynamic code (such     as script elements containing document.write() calls) can add extra tokens, so the parsing process actually modifies the input.
Unable to use the regular parsing techniques, browsers create custom parsers for parsing HTML.

The algorithm consists of two stages: tokenization and tree construction.

The tokenizer recognizes the token, gives it to the tree constructor, and consumes the next character for recognizing the next token, and so on until the end of the input.

<img src="../images/html_parsing_flow.webp">

The tokenization algorithm :
The algorithm's output is an HTML token. The algorithm is expressed as a state machine. Each state consumes one or more characters of the input stream and updates the next state according to those characters. The decision is influenced by the current tokenization state and by the tree construction state. This means the same consumed character will yield different results for the correct next state, depending on the current state. The algorithm is too complex to describe fully, so let's see a simple example that will help us understand the principle.

Basic example - tokenizing the following HTML:


<html>
  <body>
    Hello world
  </body>
</html>

The initial state is the "Data state". When the < character is encountered, the state is changed to "Tag open state". Consuming an a-z character causes creation of a "Start tag token", the state is changed to "Tag name state". We stay in this state until the > character is consumed. Each character is appended to the new token name. In our case the created token is an html token.

When the > tag is reached, the current token is emitted and the state changes back to the "Data state". The <body> tag will be treated by the same steps. So far the html and body tags were emitted. We are now back at the "Data state". Consuming the H character of Hello world will cause creation and emitting of a character token, this goes on until the < of </body> is reached. We will emit a character token for each character of Hello world.

We are now back at the "Tag open state". Consuming the next input / will cause creation of an end tag token and a move to the "Tag name state". Again we stay in this state until we reach >.Then the new tag token will be emitted and we go back to the "Data state". The </html> input will be treated like the previous case.

Tokenizing the example input 

<img src="../images/tokenizing.webp">

Figure : Tokenizing the example input
Tree construction algorithm #
When the parser is created the Document object is created. During the tree construction stage the DOM tree with the Document in its root will be modified and elements will be added to it. Each node emitted by the tokenizer will be processed by the tree constructor. For each token the specification defines which DOM element is relevant to it and will be created for this token. The element is added to the DOM tree, and also the stack of open elements. This stack is used to correct nesting mismatches and unclosed tags. The algorithm is also described as a state machine. The states are called "insertion modes".

Let's see the tree construction process for the example input:


<html>
  <body>
    Hello world
  </body>
</html>
The input to the tree construction stage is a sequence of tokens from the tokenization stage. The first mode is the "initial mode". Receiving the "html" token will cause a move to the "before html" mode and a reprocessing of the token in that mode. This will cause creation of the HTMLHtmlElement element, which will be appended to the root Document object.

The state will be changed to "before head". The "body" token is then received. An HTMLHeadElement will be created implicitly although we don't have a "head" token and it will be added to the tree.

We now move to the "in head" mode and then to "after head". The body token is reprocessed, an HTMLBodyElement is created and inserted and the mode is transferred to "in body".

The character tokens of the "Hello world" string are now received. The first one will cause creation and insertion of a "Text" node and the other characters will be appended to that node.

The receiving of the body end token will cause a transfer to "after body" mode. We will now receive the html end tag which will move us to "after after body" mode. Receiving the end of file token will end the parsing.

Tree construction of example HTML.

<img src="../images/tree_construction.webp">

Figure : tree construction of example html

CSS PARSSING:
Well, unlike HTML, CSS is a context free grammar and can be parsed using the types of parsers
Explanation:

A ruleset is this structure:


div.error, a.error {
  color:red;
  font-weight:bold;
}

div.error and a.error are selectors. The part inside the curly braces contains the rules that are applied by this ruleset. This structure is defined formally in this definition:


ruleset
  : selector [ ',' S* selector ]*
    '{' S* declaration [ ';' S* declaration ]* '}' S*
  ;
This means a ruleset is a selector or optionally a number of selectors separated by a comma and spaces (S stands for white space). A ruleset contains curly braces and inside them a declaration or optionally a number of declarations separated by a semicolon. "declaration" and "selector" will be defined in the following BNF definitions.

WebKit CSS parser #
WebKit uses Flex and Bison parser generators to create parsers automatically from the CSS grammar files. As you recall from the parser introduction, Bison creates a bottom up shift-reduce parser. Firefox uses a top down parser written manually. In both cases each CSS file is parsed into a StyleSheet object. Each object contains CSS rules. The CSS rule objects contain selector and declaration objects and other objects corresponding to CSS grammar.

Parsing CSS.
<img src="../images/parsing_css.webp">

The order of processing scripts:
    Scripts #
    The model of the web is synchronous. Authors expect scripts to be parsed and executed immediately when the parser reaches a <script> tag. The parsing of the document halts until the script has been executed. If the script is external then the resource must first be fetched from the network - this is also done synchronously, and parsing halts until the resource is fetched. This was the model for many years and is also specified in HTML4 and 5 specifications. Authors can add the "defer" attribute to a script, in which case it will not halt document parsing and will execute after the document is parsed. HTML5 adds an option to mark the script as asynchronous so it will be parsed and executed by a different thread.

Speculative parsing #
Both WebKit and Firefox do this optimization. While executing scripts, another thread parses the rest of the document and finds out what other resources need to be loaded from the network and loads them. In this way, resources can be loaded on parallel connections and overall speed is improved. Note: the speculative parser only parses references to external resources like external scripts, style sheets and images: it doesn't modify the DOM tree - that is left to the main parser.

Style sheets #
Style sheets on the other hand have a different model. Conceptually it seems that since style sheets don't change the DOM tree, there is no reason to wait for them and stop the document parsing. There is an issue, though, of scripts asking for style information during the document parsing stage. If the style is not loaded and parsed yet, the script will get wrong answers and apparently this caused lots of problems. It seems to be an edge case but is quite common. Firefox blocks all scripts when there is a style sheet that is still being loaded and parsed. WebKit blocks scripts only when they try to access certain style properties that may be affected by unloaded style sheets.

LayOUT:
    When the renderer is created and added to the tree, it does not have a position and size. Calculating these values is called layout or reflow.

    HTML uses a flow based layout model, meaning that most of the time it is possible to compute the geometry in a single pass. Elements later "in the flow" typically do not affect the geometry of elements that are earlier "in the flow", so layout can proceed left-to-right, top-to-bottom through the document. There are exceptions: for example, HTML tables may require more than one pass.

    The coordinate system is relative to the root frame. Top and left coordinates are used.

    Layout is a recursive process. It begins at the root renderer, which corresponds to the <html> element of the HTML document. Layout continues recursively through some or all of the frame hierarchy, computing geometric information for each renderer that requires it.

    The position of the root renderer is 0,0 and its dimensions are the viewport - the visible part of the browser window.

    All renderers have a "layout" or "reflow" method, each renderer invokes the layout method of its children that need layout.

PAINTING:
    In the painting stage, the render tree is traversed and the renderer's "paint()" method is called to display content on the screen. Painting uses the UI infrastructure component.

The painting order #
1) background color
2) background image
3) border
4) children
5) outline

Firefox display list #
Firefox goes over the render tree and builds a display list for the painted rectangular. It contains the renderers relevant for the rectangular, in the right painting order (backgrounds of the renderers, then borders etc).

That way the tree needs to be traversed only once for a repaint instead of several times - painting all backgrounds, then all images, then all borders etc.

Firefox optimizes the process by not adding elements that will be hidden, like elements completely beneath other opaque elements.

WebKit rectangle storage #
Before repainting, WebKit saves the old rectangle as a bitmap. It then paints only the delta between the new and old rectangles.

Dynamic changes #
The browsers try to do the minimal possible actions in response to a change. So changes to an element's color will cause only repaint of the element. Changes to the element position will cause layout and repaint of the element, its children and possibly siblings. Adding a DOM node will cause layout and repaint of the node. Major changes, like increasing font size of the "html" element, will cause invalidation of caches, relayout and repaint of the entire tree.