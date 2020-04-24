function find(arr, n){
    const my = arr.length
    const mx = arr[0].length
    for (let j=0; j<my; j++)
      for (let i=0; i<mx; i++) 
        if (arr[j][i] == n) return {x:i,y:j, result: true}
    console.log('okkkkkkkkkkkkkkkkkkkkkkkkk')      
    return {x:-100,y:-100, result: false}   
  }
  function fill(arr, x, y, n, p){
    const my = arr.length
    const mx = arr[0].length
    //if (!arr[x]) return -1
    //if (!arr[x][y]) return -1
    console.log('x:,'x, mx)
    console.log('y:',y, my)
    if (x < 0) return -1
    if (y < 0) return -1
    if (y > my - 1) return -1
    if (x > mx - 1) return -1  
    //console.log('<okkkk>:'+p, x, y, arr[y][x])
    let r1=0
   // console.log('qqqqqqq',arr[y][x])
    if (arr[y][x] == 0) arr[y][x] = n
      else return -1
    //console.log('</okkkk>:'+p, x, y, arr[y][x])  
    //console.log('ok1')
    fill(arr, x+1, y, n, p+1)
    //console.log('x+1')
    fill(arr, x-1, y, n, p+1)
   // console.log('x-1')
    fill(arr, x, y+1, n, p+1)
   // console.log('y+1')
    fill(arr, x, y-1, n, p+1)
  //  console.log('x-1')
    fill(arr, x+1, y-1, n, p+1)
   // console.log('x+1, y-1')
    fill(arr, x+1, y+1, n, p+1)
  //console.log('x+1, y+1')  
    fill(arr, x-1, y-1, n, p+1)
  //  console.log('x-1, y-1')
    fill(arr, x-1, y+1, n, p+1)  
  //  console.log('x-1, y+1')
      
    return p;
  }
  function breakPieces (shape){
    // complete me!
    //console.log(shape)
    //console.log(shape.split("\n"))
    let a = shape.split("\n");//.map((i) => i != ' ' ? 1 : 0 );
    let arr = []
    for (item of a) {  
      arr.push([0,...item.split('').map((i) => i != ' ' ? 1 : 0 ), 0])
    }  
    const maxy = arr[0].length
    const p = Array(maxy).fill(0)
    arr.push(p)
    arr.unshift(p);
    const maxx = arr.length
    console.log(arr) 
      var mx = maxx
    var my = maxy
    fill(arr, 0, 0, 2, 1)  
    let count = 0
    let point
    console.log('////////////////////////////////////////////////////////////////')    
      do {
        point = find(arr, 0);
        console.log(point)
        if (point.result) {
          console.log(arr[point.y][point.x]) 
          //arr[point.y][point.x] = 9 //
          fill(arr, point.x, point.y, count, 0)
        }  
        count++
    } while (point.result);
   // console.log('count:',count, "=====================")  
   // console.log(arr[7][12])
    //fill(arr, 9, 7, 5, 1)
    //fill(arr, 9, 2, 6, 1)  
    //fill(arr, 2, 7, 7, 1)  
    console.log('-------------------------------------------------------')
    console.log(arr)
    
    
    return ['------------------------','------------------------','------------------------',]
  }