import { GlitchSection, GlitchSpan } from "./GlitchElements";

export interface GlitchPorps
{
    children?:any;
    fontSize?:any;
} 
const GlitchText = (props: GlitchPorps )=>
{
    return(
        <GlitchSection fontSize={props.fontSize} style={{width:"fit-content", margin:"auto"}}>
            <GlitchSpan aria-hidden="true" >{props.children}</GlitchSpan>
            {props.children}
            <GlitchSpan aria-hidden="true" >{props.children}</GlitchSpan>
        </GlitchSection>
    );
}

export default GlitchText;