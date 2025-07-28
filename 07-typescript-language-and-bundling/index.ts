// type annotations and inference
let message: string = "Hello, TypeScript!";
let count: number = 42;
let isActive: boolean = true;

// type inference
let inferredMessage = "Hello, TypeScript!";
let inferredCount = 42;
let inferredIsActive = true;

interface OtherSomething {
    test: { name: string };
}

interface MySomething extends OtherSomething {
    foo: any;
    bar: number;
}

type MyType = {
    foo: string;
    bar: number;
}

type SomethingElse = MyType & { name: string } // |

let account: 'ACTIVE' | 'INACTIVE';

account = 'INACTIVE'




