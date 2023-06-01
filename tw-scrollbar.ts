import plugin from "tailwindcss/plugin";

export default plugin(function ({ addVariant }) {
	addVariant("scrollbar", "&::-webkit-scrollbar");
	addVariant("scrollbar-track", "&::-webkit-scrollbar-track");
	addVariant("scrollbar-thumb", "&::-webkit-scrollbar-thumb");
});
