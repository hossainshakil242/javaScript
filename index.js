
{
    function sum(a, b) {
        console.log(a + b);
    }
    sum(5, 6); // this is one statement , here call sum function;
}

{
    function myName(obj) {
        obj.name = 'sajedul';
        console.log(obj.name);
    }
    let obj = {
        name: 'shakil'
    }
    console.log(obj.name);
    console.log(myName(obj)); // Default any function return undefine

}