// Load all images from assets/img to an array and save it as a JSON file on assets/img/images.json
// This is used to load all images in the gallery
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
    const imagesDir = path.join(__dirname, '../public/img');
    const imagesJson = path.join(__dirname, '../src/images.json');

    const images = await fs.readdir(imagesDir);

    const imagesJsonContent = JSON.stringify(images);

    await fs.writeFile(imagesJson, imagesJsonContent);

    console.log('Images JSON file generated');
}

main();
