/**
 * Slices a string to a maximum length and appends an ellipsis if necessary.
 *
 * @param {Object} options - The options for slicing the string.
 * @param {string} options.str - The string to be sliced.
 * @param {number} options.max - The maximum length of the resulting string including the ellipsis.
 * @param {string} [options.ellipsis='...'] - The string to append if the text is sliced. Default is '...'.
 * @returns {string} The sliced string with the ellipsis if it exceeds the maximum length.
 */
export const sliceString = ({
    str,
    max = 20,
    ellipsis = "..",
}: {
    str: string | undefined;
    max?: number;
    ellipsis?: string;
}): string => {
    if (!str) return "";
    if (str?.length <= max) return str;

    const end = max - ellipsis.length;
    return end > 0 ? `${str.slice(0, end)}${ellipsis}` : `${str.slice(0, max)}`;
};
