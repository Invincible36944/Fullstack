const Total = (props) => {
    const ex1 = props.exercise1;
    console.log(ex1);
    const ex2 = props.exercise2;
    const ex3 = props.exercise3;
    return (
        <>
        <p>Number of exercises is {ex1+ex2+ex3}</p>
        </>
    )

}

export default Total;