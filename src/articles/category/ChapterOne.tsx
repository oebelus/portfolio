import Latex from 'react-latex'
import hljs from "highlight.js/lib/core";
import haskell from "highlight.js/lib/languages/java";

hljs.registerLanguage("haskell", haskell);

export default function ChapterOne() {
  return (
    <div className="font-sans mb-4 text-lg">
        <p className="italic text-"><span className='font-bold text-violet-400'>1.</span> Implement, as best as you can, the identity function in your favorite language (or the second favorite, if your favorite language happens to be Haskell).</p>
        <br />
        {"> "}The identity function being:
        <br />
        <div className="flex justify-center">
            <Latex>$f(x) = x$</Latex>
        </div>
        In Haskell:
        <pre className="language-haskell rounded-md bg-gray-200 dark:bg-zinc-800 p-4 overflow-x-auto">
            <code>
                {`identity :: a -> a
identity x = x
`}
            </code>
        </pre><br />
        In C#
        <pre className='language-csharp rounded-md bg-gray-200 dark:bg-zinc-800 p-4 overflow-x-auto'>
            <code>
                {`T Identity<T>(T x) => x;`}
            </code>
        </pre><br />

        <p className='italic'><span className='font-bold text-violet-400'>2.</span> Implement the composition function in your favorite language. It takes two functions as arguments and returns a function that is their composition.</p>
        <br />
        {"> "}The composition function being: 
        <div className='flex justify-center'>
            <Latex>
                $ (f\circ g) = f(g(x)) $
            </Latex>
        </div>
        In Haskell:
        <pre className='language-haskell rounded-md bg-gray-200 dark:bg-zinc-800 p-4 overflow-x-auto'>
            <code>
                {`compose :: (b -> c) -> (a -> b) -> a -> c
compose f g x = f (g x)`}
            </code>
        </pre><br />
        or using the lambda function:
        <pre className='language-haskell rounded-md bg-gray-200 dark:bg-zinc-800 p-4 overflow-x-auto'>
            <code>
                {`compose :: (b -> c) -> (a -> b) -> a -> c
compose f g = \\x -> f (g x)`}
            </code>
        </pre><br />
        In C#
        <pre className='language-csharp rounded-md bg-gray-200 dark:bg-zinc-800 p-4 overflow-x-auto'>
            <code>
                {`Func<T, T> Composition<T>(Func<T, T> f, Func<T, T> g) => x => f(g(x));`}
            </code>
        </pre><br />
        <p className='italic'><span className='font-bold text-violet-400'>3.</span>  Write a program that tries to test that your composition function respects identity.</p>
        <br />
        {"> "}<span className='font-bold'>f ∘ Id = f</span>
        <pre className='language-csharp rounded-md bg-gray-200 dark:bg-zinc-800 p-4 overflow-x-auto'>
            <code>
                {`Compose<int>(x => x + 1, Identity)(11); // => f(11) = 12`}
            </code>
        </pre><br />
        {"> "}<span className='font-bold'>Id ∘ f = f</span>
        <pre className='language-csharp rounded-md bg-gray-200 dark:bg-zinc-800 p-4 overflow-x-auto'>
            <code>
                {`Compose<int>(Identity, x => x + 1)(11); // => f(11) = 12`}
            </code>
        </pre><br />
        <p className='italic'><span className='font-bold text-violet-400'>4.</span> Is the world-wide web a category in any sense? Are links morphisms?</p>
        <br />
        If we consider web <span className='underline'>pages</span> as <span className='text-violet-800 dark:text-violet-400'>objects</span> and <span className='underline'>hyperlinks</span> as <span className='text-violet-800 dark:text-violet-400'>morphisms</span>, the World Wide Web cannot be considered a category because:
        <br /><br />
        <p className='ml-4 font-bold text-xl'>{">"} Composition:</p><br />
        <pre className='rounded-md bg-gray-200 dark:bg-zinc-800 p-4 overflow-x-auto'>
            <code>
                {`if	Link A -> Link B
and Link B -> Link C

≠> Link A -> Link C`}
            </code>
        </pre><br />
        <p className='ml-4 font-bold text-xl'>{">"} Associativity:</p><br />
        <pre className='rounded-md bg-gray-200 dark:bg-zinc-800 p-4 overflow-x-auto'>
            <code>
                {`if	Link A -> Link B
and Link B -> Link C
and Link C -> Link D

≠>  Link A -> Link C or Link B -> Link D ...etc.`}
            </code>
        </pre><br />
        <p className='ml-4 font-bold text-xl'>{">"} Identity:</p><br />
        While some web pages may have links to themselves, most pages do not contain explicit self-referential links. 
	{"=>"} Therefore, the identity morphism condition is <span className='text-violet-800 dark:text-violet-400'>not satisfied</span>.<br/><br />
    <p className='italic'><span className='font-bold text-violet-400'>5.</span>Is Facebook a category, with people as objects and friendships as morphisms?</p> <br />
    If we consider <span className='underline'>friends</span> as <span className='text-violet-800 dark:text-violet-400'>objects</span> (ofc not literally lol) and <span className='underline'>friendships</span> as <span className='text-violet-800 dark:text-violet-400'>morphisms</span>:
    <pre className='rounded-md bg-gray-200 dark:bg-zinc-800 p-4 overflow-x-auto'>
        <code>
            {`if   Person A 'friend with' Person B
and  Person B 'friend with' Person C

≠>   Person A 'friend with' Person C`}
        </code>
    </pre><br />
    Morphisms must be composable, but friendships on Facebook are not composable or transitive. And thus, <span className='text-violet-800 dark:text-violet-400'>Facebook is not a category</span><br /><br />
    <p className='italic'><span className='font-bold text-violet-400'>6.</span> When is a directed graph a category?</p><br />
    A directed graph can be considered a category when it satisfies the following conditions:
        <p className='ml-4 '>{"•"} Objects and Morphisms;</p>
        <p className='ml-4 '>{"•"} Composition;</p>
        <p className='ml-4 '>{"•"} Associativity;</p>
        <p className='ml-4 '>{"•"} Identity (self-loops).</p><br />
    Here is a graph that satisfies them: <br /><br />
    <div className='flex justify-center'>
        <img src="https://i.imgur.com/YUlJM54.png" alt="graph" />
    </div><br />
    </div>
  )
}
