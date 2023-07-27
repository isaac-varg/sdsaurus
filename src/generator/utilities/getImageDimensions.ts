
const getBase64ImageDimensions = async (base64Image: string): Promise<{ width: number; height: number }> => {
    return new Promise<{ width: number; height: number }>((resolve, reject) => {
        const image = new Image()

        image.onload = () => {
            const width = image.width;
            const height = image.height;

            resolve({ width, height });
        }

        image.onerror = function() {
            reject(new Error('Error loading image'));
        }

        image.src = base64Image;
    });
}

export default getBase64ImageDimensions;