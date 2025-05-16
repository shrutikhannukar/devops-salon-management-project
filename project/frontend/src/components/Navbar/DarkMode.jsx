

const DarkMode = () => {
  
  return (
    <div>
      <div className="haru-search-wrap" data-hint-message="Please type at least 3 character to search...">
<form method="get" action="https://juicesalons.com" className="search-popup-form" data-search-type="standard">
<input type="search" name="s" autocomplete="off" placeholder="Search for..."/>
<button type="submit"><i className="icon-search ion ion-md-search"></i></button>
<input type="hidden" name="post_type" value="product"/> 
</form>
</div>

    </div>
   
  );
};

export default DarkMode;


