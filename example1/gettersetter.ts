class Rectangle{
    _length=0;
      _breath=0;
      
      
      public get length() : number {
          return this._length; 
      }
      public get breath() : number {
          return this._breath; 
      }
      public set length(l: number) {
          this._length = l;
      }
      
      public set breath(b : number) {
          this._breath = b;
      }
      
      
  }
  let rect=new Rectangle();
  //call setters
  rect.length=20;
  rect.breath=10;
  console.log("length="+rect.length);
  console.log("breadth="+rect.breath);