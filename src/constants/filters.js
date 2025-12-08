export const CATEGORIES = [
    "Accessories",
    "Bottoms",
    "Dresses",
    "Intimates",
    "Jumpsuits",
    "Loungewear",
    "Outerwear",
    "Shoes",
    "Sweaters",
    "Swimwear",
    "Tops",
];

/* 
 * TODO: the data file also has products with numbers in its "sizes" array,
 * so figure out a way to incorporate that
 */ 
export const SIZES = [
    "XS",
    "S",
    "M",
    "L",
    "XL",
];

/*
 * Too many material types in the data file, only including the common/noteable ones
 * Every other material not in these common types will be labeld as "other" 
 * 
 * Note that materials isn't shown in the exmaple for the browse view, so it might not be needed
 */
export const MATERIALS = [
    "Cashemere",
    "Cotton",
    "Denim",
    "Leather",
    "Nylon",
    "Polyester",
    "Sherpa",
    "Silk",
    "Wool",
    "Other",
];

/*
 * Same as materials, too many colors so only using the most common/notalbe ones
 * Dynamically putting the hex number into the class name doesn't work; must use full name
 */
export const COLORS = [
    { name: "Black", hex: "bg-[#000000]" },
    { name: "Beige", hex: "bg-[#ede8d0]" },
    { name: "Blue", hex: "bg-[#0066ffff]" },
    { name: "Brown", hex: "bg-[#a36537ff]" },
    { name: "Burgundy", hex: "bg-[#660033]" },
    { name: "Camel", hex: "bg-[#c19a6b]" },
    { name: "Charcoal", hex: "bg-[#36454f]" },
    { name: "Gold", hex: "bg-[#ebdd1eff]" },
    { name: "Gray", hex: "bg-[#8b8b8bff]" },
    { name: "Green", hex: "bg-[#2dd51eff]" },
    { name: "Ivory", hex: "bg-[#ffffe3]" },
    { name: "Navy", hex: "bg-[#00279dff]" },
    { name: "Red", hex: "bg-[#ff0000ff]" },
    { name: "Tan", hex: "bg-[#d2b48c]" },
    { name: "White", hex: "bg-[#FFFFFF]" },
    { name: "Yellow", hex: "bg-[#fffb00ff]" },
];