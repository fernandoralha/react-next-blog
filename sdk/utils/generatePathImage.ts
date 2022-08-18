import { Character } from "../@types/Character";

export function generatePathImage(image: Character.Image): string {
    return image.path + '.' + image.extension;
}