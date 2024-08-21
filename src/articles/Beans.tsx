import hljs from "highlight.js/lib/core";
import java from "highlight.js/lib/languages/java";

hljs.registerLanguage("javascript", java);

export default function Beans() {
    return (
        <div className="font-sans mb-4 text-lg">
            In this post, I will introduce the concept of IoC (Inversion of Control) and DI (Dependency Injection) and Beans in the Spring Framework. <br /><br />

            As its name suggests, IoC (Inversion of Control) is a principle that transfers the control of the program to a container or a framework, in our case, to the Spring Container. <br /><br />

            It is implemented by the DI (Dependency Injection) Design Pattern and other patterns such as: Strategy design pattern, Service Locator pattern and Factory pattern. But I am gonna focus on DI.  <br /><br />

            So, instead of taking care of the flow of the application and thinking about when and where to instantiate some classes, Spring framework does this for us. <br /><br />

            Example: Let's say I have <span className="font-mono bg-gray-200 dark:bg-zinc-800 px-1">UserController</span> and <span className="font-mono bg-gray-200 dark:bg-zinc-800 px-1">UserService</span> classes, I will definitely need to instantiate a new class of <span className="font-mono bg-gray-200 dark:bg-zinc-800 px-1">UserService</span> inside the <span className="font-mono bg-gray-200 dark:bg-zinc-800 px-1">UserController</span>. Instead of that, Spring <b className="text-base font-sans">injects</b> the former in the latter.<br/><br/>

            <h3 className="text-2xl font-sans">/ Why do we care? </h3><br />

            The answer is simple, let's take a look on some advantages of this architecuture: <br />
            <p className="font-sans ml-6">{"->"} Making it easier to test by isolating individual components;</p>
            <p className="font-sans ml-6">{"->"} Decoupling the execution of tasks from their implementation;</p>
            <p className="font-sans ml-6">{"->"} Simplifying the process of swapping between different implementations.</p>
            <br />
            The question now is, how does it do that? The subtle answer is through <b className="font-sans text-violet-400">Beans</b>! 
            <br /><br />

            <h3 className="text-2xl font-sans">/ So, what are Beans? </h3><br />

            A Bean is an instance of a class managed by the Spring Container that takes care of doing independency injection. <br /><br />

            <h3 className="text-2xl font-sans">/ But, what is a Spring Container, you might ask? </h3><br />

            The Spring Container is a part of the core of the Spring Framework, responsible for managing all the Beans, and responsible for instantiating, configuring and assembling them, as well as their life cycles. <br /><br />

            Examples of Beans include: <span className="font-mono px-1">@Component</span>, <span className="font-mono bg-gray-200 dark:bg-zinc-800 px-1">@Controller</span>, <span className="font-mono bg-gray-200 dark:bg-zinc-800 px-1">@Service</span>, <span className="font-mono bg-gray-200 dark:bg-zinc-800 px-1">@Repository</span> <br /><br />

            Here is an example of code without DI: <br /><br />

            <pre className="language-java rounded-md bg-gray-200 dark:bg-zinc-800 p-4">
                <code>
                    {`public class UserService {

    public String findAll() {
        return "All Users";
    }
}
`}
                </code>
            </pre>
            <br />
            <pre className="language-java rounded-md bg-gray-200 dark:bg-zinc-800 p-4">
                <code>
                    {`@RestController
@RequestMapping("/api/users")
public class UserController {

	private UserService userService;

	public UserController() {
		this.userService = new UserService();
	}

	@GetMapping
	public String findAll() {
		return userService.findAll();
	}
}
`}
                </code>
            </pre>
            <br />
            In this example, I instantiated manually the `UserService` class inside `UserController`, which makes the two classes very dependent on each other. <br /><br />

            For example, if I wanna write tests for the Controller alone, I will always be creating a new instance of `UserService`, which makes it impossible to test the `UserConroller` alone. <br /><br />

            {"->"} So, whenever you see a `new` keyword, it means that something is wrong and you should think about starting to use what Spring brings correctly! (JK)<br /><br />

            So, I don't want to control the instantiation of classes, I want Spring to do that for me (IoC = Spring Controls stuff for us and thus inversion of control);<br /><br />
        
            <h3 className="text-2xl font-sans">/ How can we fix the code above then? </h3><br />
            Let's take another look: <br />

            <pre className="language-java rounded-md bg-gray-200 dark:bg-zinc-800 p-4">
                <code>
                    {`@Service
public class UserService {

	public String findAll() {
		return "All Users";
	}
}
`}
                </code>
            </pre>
            <br />
            What changed? I added the Bean `@Service` that implements `@Component` Bean. And thus, it will be automatically picked up and put in the application context, and I can use it wherever I want. <br /><br />

            <pre className="language-java rounded-md bg-gray-200 dark:bg-zinc-800 p-4">
                <code>
                    {`@RestController
@RequestMapping("/api/users")
public class UserController {

	private final UserService userService;

	public UserController(UserService userService) {
		this.userService = userService; // It's not instantiated anymore!
	}

	@GetMapping
	public String findAll() {
		return userService.findAll();
	}
}
`}
                </code>
            </pre>
            <br />
            Now, we don't see any <span className="font-mono bg-gray-200 dark:bg-zinc-800 px-1">new</span> keyword, which means that everything is alright : D
        </div>
    )
}
