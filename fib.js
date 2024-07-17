num=+prompt("enter any number:");

a=0,b=1,count=0
while(true)
{
   
    for(i=a+1;i<=b-1;i++)
    {
        if(i<=num)
        {
            console.log(i)
        }
       
       
    }
  
   
    c=a+b
    a=b
    b=c
}



num=+prompt("enter any number:");
a=0,b=1,i=1,count=0
while(i<=num)
{
    if(a==2)
    {
        console.log(a)
    }
   for(j=2;j<a;j++)
   {
       if(a%j==0)
       {
           count++
          
           break;

       }
       else if(count==0)
       {
           console.log(a)
           break;
       }
     
      
      
   }
 
  
   
  
   
   c=a+b
   a=b
   b=c
   i++
}




num=+prompt("enter any number:");
a=0,b=1,i=1,count=0
while(i<=num)
{
    if(a==1 | a==0)
    {
        console.log(a)
    }
   for(j=2;j<a;j++)
   {
       if(a%j==0)
       {
           count++
           
           break;

       }
      
      
   }
   if(count>0)
   {
       console.log(a)
   }
   
  
   
   c=a+b
   a=b
   b=c
   i++
}
