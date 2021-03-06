export default class Converter {
  private static CLASSNAME_REPLACEMENTS: { [key: string]: string; } = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };

  public static iconClassName(name: string): string {
    return name
      .toLowerCase()
      .replace(/-alt$/, '-alternate')
      .replace(/-alt-/, '-alternate-')
      .replace(/-h$/, '-horizontal')
      .replace(/-h-/, '-horizontal-')
      .replace(/-v$/, '-vertical')
      .replace(/-v-/, '-vertical-')
      .replace(/-alpha$/, '-alphabet')
      .replace(/-alpha-/, '-alphabet-')
      .replace(/-asc$/, '-ascending')
      .replace(/-asc-/, '-ascending-')
      .replace(/-desc$/, '-descending')
      .replace(/-desc-/, '-descending-')
      .replace(/-/g, '.')
      .replace(/\s/g, '.')
      .split('.')
      .map((entity: string) => {
        const replacementKeys = Object.keys(Converter.CLASSNAME_REPLACEMENTS);

        return replacementKeys.includes(entity)
          ? Converter.CLASSNAME_REPLACEMENTS[entity]
          : entity;
      })
      .join('.');
  }

  public static iconName(name: string): string {
    return Converter.iconClassName(name)
      .replace(/\./g, ' ');
  }
}
