// function greet(person: string, date: Date) {
//     console.log(`Hello ${person}, today is ${date.toDateString()}!`);
//     }
//     greet("Maddison",new Date());

// let msg : string ;
// msg = "Hello " ; 


// function mss(name: string) {
//     console.log("Hello, " + name.toUpperCase() + "!!");
//     }

function padLeft(padding: number | string, input: string): string {
    throw new Error("Not implemented yet!");
    }



    function printAll(strs: string | string[] | null) {
        if (strs && typeof strs === "object") {
        for (const s of strs) {
        console.log(s);
        }
        } else if (typeof strs === "string") {
        console.log(strs);
        }
        }