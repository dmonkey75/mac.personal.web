export interface IBurger
{ 
    isToggled: boolean;
    OnClick(): void;
}
 
export interface IBar
{
    value: number;
}

export interface IScreen
{
    isMobile: boolean,
    inView: boolean
}