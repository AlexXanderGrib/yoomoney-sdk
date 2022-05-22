/**
 *
 *
 * @param {string} html
 * @param {Record<string, string>} data
 */
export function testHtml(html: string, data: Record<string, unknown>) {
  for (const [key, value] of Object.entries(data)) {
    expect(html).toContain(`name="${key}" value="${value}"`);
  }
}
