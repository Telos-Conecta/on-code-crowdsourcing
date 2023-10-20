export class StringUtils {
    private static bindingParticles = ["de", "da", "do", "das", "dos"]
    
    private static capitalizeFirstCharacter(word: string): string {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    static capitalizeFirstCharacterInName(name: string): string {
        return name.trim().split(" ")
            .map(word => this.bindingParticles.includes(word)
                ? word
                : this.capitalizeFirstCharacter(word))
            .join(" ")
    }

    static capitalizeFirstCharacterInText(text: string): string {
        return this.capitalizeFirstCharacter(text)
    }
}