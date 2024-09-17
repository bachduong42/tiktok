import { forwardRef, useState } from "react";
import images from "~/assets/images/noimage.jpg"

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    const [faultback, setfaultback] = useState('')
    const handleError = () => {
        setfaultback(images)
    }

    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
            className={className}
            ref={ref}
            {...props}
            src={faultback || src}
            alt={alt}
            onError={handleError} />
    );
})

export default Image;