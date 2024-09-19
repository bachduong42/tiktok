import { forwardRef, useState } from "react";
import images from "~/assets/images/noimage.jpg"
import PropTypes from 'prop-types';
const Image = forwardRef(({ src, alt, className, fallback: customFallBack = images, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('')
    const handleError = () => {
        setFallBack(images)
    }

    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
            className={className}
            ref={ref}
            {...props}
            src={fallBack || src}
            alt={alt}
            onError={handleError} />
    );
})
Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallBack: PropTypes.string
}
export default Image;