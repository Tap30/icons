export function toPascalCase(name) {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

export function adjustSvgIndent(svgContent) {
  const lines = svgContent.split("\n");
  let indentedLines = [];
  let indentLevel = 0;

  lines.forEach((line) => {
    line = line.replace("black", "currentColor");
    if (line.trim().startsWith("</")) {
      indentLevel -= 1;
    }
    indentedLines.push("      " + "  ".repeat(indentLevel) + line);
    if (
      line.includes("<") &&
      line.includes(">") &&
      !line.trim().endsWith("/>") &&
      !line.includes("</")
    ) {
      indentLevel += 1;
    }
  });
  return indentedLines.join("\n");
}
