function CustomColor(props){

    function updateRed(e) {
        props.setColor({r: e.target.value, g: props.color.g, b: props.color.b})
    }

    function updateGreen(e) {
        props.setColor({r: props.color.r, g: e.target.value, b: props.color.b})
    }

    function updateBlue(e) {
        props.setColor({r: props.color.r, g: props.color.g, b: e.target.value})
    }

    if(props.inputView){
        return (
            <>
                <input type="number" onChange={updateRed}></input>
                <input type="number" onChange={updateGreen}></input>
                <input type="number" onChange={updateBlue}></input>
            </>
        )
    } else {
        return (
            <></>
        )
    }
}

export default CustomColor;