function mdLink(text, url) {
    return url ? `[${text}](${url})` : text;
}
function mdInlineCode(x) {
    return `\`${x}\``;
}
export function generateCard(p) {
    const links = [
        p.repoUrl ? mdLink("Repo", p.repoUrl) : null,
        p.liveUrl ? mdLink("Live", p.liveUrl) : null
    ].filter(Boolean);
    const techLine = p.tech && p.tech.length > 0
        ? `**Tech:** ${p.tech.map(mdInlineCode).join(" ")}`
        : "";
    const highlights = p.highlights && p.highlights.length > 0
        ? p.highlights.map((h) => `- ${h}`).join("\n")
        : "";
    const linkLine = links.length > 0 ? links.join(" • ") : "";
    const parts = [
        `### ${p.title}`,
        p.description,
        techLine,
        linkLine,
        highlights
    ].filter((x) => x && x.trim().length > 0);
    return parts.join("\n\n");
}
export function generateMarkdown(projects) {
    return projects.map(generateCard).join("\n\n---\n\n");
}
//# sourceMappingURL=generate.js.map