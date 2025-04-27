// components/ui/Button.js
import { forwardRef } from 'react';
import Link from 'next/link';

const Button = forwardRef(({
    children,
    className = '',
    variant = 'primary',
    size = 'md',
    href,
    isLoading = false,
    disabled = false,
    outline = false,
    icon,
    iconPosition = 'right',
    onClick,
    type = 'button',
    ...props
}, ref) => {
    // Styles
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50";

    const variantStyles = {
        primary: outline
            ? "bg-transparent border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10"
            : "bg-purple-600 hover:bg-purple-700 text-white shadow-md hover:shadow-lg hover:shadow-purple-500/25",
        secondary: outline
            ? "bg-transparent border-2 border-purple-300/30 text-purple-300 hover:bg-purple-300/10"
            : "bg-purple-900/40 hover:bg-purple-800/50 text-purple-100 shadow-sm hover:shadow-md hover:shadow-purple-500/20",
        success: outline
            ? "bg-transparent border-2 border-green-500 text-green-400 hover:bg-green-500/10"
            : "bg-green-600 hover:bg-green-700 text-white",
        danger: outline
            ? "bg-transparent border-2 border-red-500 text-red-400 hover:bg-red-500/10"
            : "bg-red-600 hover:bg-red-700 text-white",
    };

    const sizeStyles = {
        sm: "text-xs py-1.5 px-3",
        md: "text-sm py-2 px-4",
        lg: "text-base py-2.5 px-5",
        xl: "text-lg py-3 px-6",
    };

    const disabledStyles = "opacity-70 cursor-not-allowed";
    const loadingStyles = "relative !text-transparent";

    const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${disabled ? disabledStyles : ''} ${isLoading ? loadingStyles : ''}`;

    // Loading spinner
    const LoadingSpinner = () => (
        <div className="absolute inset-0 flex items-center justify-center">
            <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </div>
    );

    // Icon rendering
    const IconWrapper = () => {
        if (!icon) return null;
        return (
            <span className={`${iconPosition === 'left' ? 'mr-2' : 'ml-2'} ${isLoading ? 'opacity-0' : ''}`}>
                {icon}
            </span>
        );
    };

    // Button content
    const Content = () => (
        <>
            {iconPosition === 'left' && <IconWrapper />}
            {children}
            {iconPosition === 'right' && <IconWrapper />}
            {isLoading && <LoadingSpinner />}
        </>
    );

    // If href is provided, render as a Link
    if (href) {
        return (
            <Link href={href} className={classes} ref={ref} {...props}>
                <Content />
            </Link>
        );
    }

    // Otherwise render as a button
    return (
        <button
            type={type}
            className={classes}
            onClick={onClick}
            disabled={disabled || isLoading}
            ref={ref}
            {...props}
        >
            <Content />
        </button>
    );
});

Button.displayName = 'Button';

export default Button;