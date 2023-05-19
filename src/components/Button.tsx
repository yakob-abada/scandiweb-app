const Button = () => {
    const shoot = (name: string) => alert('testing ' + name);

    return (
        <>
            <button onClick={() => shoot('Yakob')}>Try me!</button>
        </>
    );
}

export default Button;