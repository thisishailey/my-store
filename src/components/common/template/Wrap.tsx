interface WrapProps {
    children?: React.ReactNode;
    classList?: string;
}

export default function Wrap({ children, classList }: WrapProps) {
    const defaultClasses = 'w-full max-w-7xl my-0 mx-auto ';
    const additionalClasses = classList || '';

    const wrapClasses = defaultClasses + additionalClasses;

    return (
        <>
            <div className={wrapClasses}>{children}</div>
            <div className="h-12"></div>
        </>
    );
}
