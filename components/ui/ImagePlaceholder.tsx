interface ImagePlaceholderProps {
  width?: number;
  height?: number;
  text?: string;
  icon?: string;
  className?: string;
}

export default function ImagePlaceholder({
  width = 400,
  height = 300,
  text = 'Image',
  icon = '🖼️',
  className = '',
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200 ${className}`}
      style={{ width, height }}
    >
      <div className="text-center text-charcoal-400">
        <div className="text-6xl mb-2">{icon}</div>
        <div className="text-sm font-medium">{text}</div>
      </div>
    </div>
  );
}

