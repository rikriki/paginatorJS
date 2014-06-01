 var _assets=[];
 var _itemsPerPage;
 var _itemsToDisplay=[];
 var _maxPages;
 var _currentPage = 1;
 var _startIndex;
 var _endIndex;
 var _numToLoad;
 function Paginator(assets,itemsPerPage)
 {

      _assets = assets;
      _itemsPerPage = itemsPerPage;

      _calculateMaxPages();
      function _calculateMaxPages()
      {
        if (_assets && _assets.length > 0 && itemsPerPage > 0)
        {
          _maxPages = Math.ceil(_assets.length / itemsPerPage);
          _calculatePagination();
        }
      }

      function _calculatePagination()
      {
        _startIndex = (_currentPage - 1) * itemsPerPage;
        _endIndex = _startIndex + (itemsPerPage - 1);
        
        if (_endIndex > _assets.length - 1) _endIndex = _assets.length - 1;
      }
      function gotoNextPage()
      {
        if (_currentPage < _maxPages)
        {
          _currentPage++;
          _calculatePagination();
          return true;
        }
        
        return false;
      }
       this.gotoPage = function(page)
      {
        if (page > 0 && page <= _maxPages )
        {
          _currentPage = page;
          _calculatePagination();
          _numToLoad = _endIndex - _startIndex;
          _itemsToDisplay = [];
          for(var i = 0; i<=_numToLoad;i++){
            _itemsToDisplay.push(_assets[_startIndex+i]);
          }
        }
        return _itemsToDisplay;
      }



    
    //========================================================
    // Getters / Setters
    //========================================================
    
    /**
     * The array of assets to be displayed.
     */
     function getAssets() { return _assets; }
     function setAssets(value) 
    {
      _assets = value;
      _calculateMaxPages();
    }
    
    /**
     * The number of items that will be displayed in a single page.
     */
    
    
    function getItemsPerPage() { 
      return _itemsPerPage; 
    }
    
     function setItemsPerPage(value) 
        {
          _itemsPerPage = value;
          _calculateMaxPages();
        }
    
    /**
     * The total number of pages based on the total number of assets and the value of <code>itemsPerPage</code>.
     */

   this.getMaxPages = function ()
   { return _maxPages; }
      

   function getCurrentPage()
   { return _currentPage; }
  

   function getStartIndex()
   { return _startIndex; }
    

   function getEndIndex()
   { return _endIndex; }
    
  
    

   function  numOfPages()
   { return _maxPages; }

   
    
 
    function gotoPreviousPage()
    {
      if (currentPage > 1)
      {
        _currentPage--;
        _calculatePagination();
        return true;
      }
      
      return false;
    }
    

    function gotoFirstPage() 
    {
      _currentPage = 1;
      _calculatePagination();
    }
    

    function gotoLastPage() 
    {
      _currentPage = maxPages;
      _calculatePagination();


    }

   

    function clear() 
    {
      _assets = null;      
      _itemsPerPage = 0;
      _maxPages = 0;
      _currentPage = 1;
      _startIndex = 0;
      _endIndex = 0;
    }
    
    function toString()
    {
      return "Page: " + _currentPage.toString() + " of " + _maxPages.toString();
    }
    
  
    
}