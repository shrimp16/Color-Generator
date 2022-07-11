import { StyledCustomColor } from '../Styles/CustomColor.styled';
import { StyledInput } from '../Styles/Input.styled';

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
            <StyledCustomColor>
                <StyledInput min={0} max={255} type="number" onChange={updateRed}></StyledInput>
                <StyledInput min={0} max={255} type="number" onChange={updateGreen}></StyledInput>
                <StyledInput min={0} max={255} type="number" onChange={updateBlue}></StyledInput>
            </StyledCustomColor>
        )
    } else {
        return (
            <></>
        )
    }
}

export default CustomColor;