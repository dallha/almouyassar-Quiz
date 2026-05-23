interface SacredDividerProps {
    variant?: 'gold' | 'green' | 'subtle';
    className?: string;
}

const variantStyles = {
    gold: 'border-[#C8A44D]/20',
    green: 'border-[#0D4D43]/15',
    subtle: 'border-black/5',
};

export default function SacredDivider({
    variant = 'subtle',
    className = '',
}: SacredDividerProps) {
    return (
        <div className={`relative py-4 ${className}`}>
            <div className={`border-t ${variantStyles[variant]}`} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C8A44D]/30" />
            </div>
        </div>
    );
}
