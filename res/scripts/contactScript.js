function makeStuff(){let i=["email","linkedin","github"],a=[];i.forEach(e=>{var i=new TimelineMax({paused:!0});i.to("#underline-"+e,.4,{width:"100%",transformOrigin:"left",ease:Power2.easeOut}),a.push(i)}),i.forEach(e=>{$("#"+e).hover(()=>{a[i.indexOf(e)].play()},()=>{a[i.indexOf(e)].reverse()})})}makeStuff();