interface StandartProps {
	className?: string;
	children?: React.ReactNode;
	style?: React.CSSProperties;
	id?: string;
	disabled?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	// onFocus?: React.FocusEventHandler<HTMLInputElement>;
	// onBlur?: React.FocusEventHandler<HTMLInputElement>;
	// onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
	// onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
	// onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
	// onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
	// onMouseMove?: React.MouseEventHandler<HTMLButtonElement>;
	// onMouseOver?: React.MouseEventHandler<HTMLButtonElement>;
	// onMouseOut?: React.MouseEventHandler<HTMLButtonElement>;
}

export type { StandartProps };