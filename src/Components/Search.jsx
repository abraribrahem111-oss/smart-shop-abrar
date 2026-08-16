const Search = () => {
    return(
       <div>
        <label>
            عن ماذا تبحث؟
        </label>
       <input 
       type="text" 
       placeholder="اكتب كلمة البحث..." 
       className="w-full border-b border-gray-200 py-2 pr-2 pl-8 text-sm outline-none focus:border-[#7DCCDA] transition"
       />
        </div>
    )
};

export default Search;