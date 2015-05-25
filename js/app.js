  angular.module('myApp', [])
  angular.module('myApp')
  //Question 1
  .controller('MemberCtrl',['$scope',function($scope){
    $scope.members = [
    {name:'Sung Cheul Hong', imageURL:"images/team/sung.jpg",role:"Founder",job:"Groupon: Associate Product Manager",program:"System Design Engineering 2015", email:"sc3hong@uwaterloo.ca", LinkedIn:"https://www.linkedin.com/in/sungcheulhong", description:"Sung has done his first two co-ops at startups for developer positions. He then moved into business roles are BlackBerry and Manulife Financial. For his last two co-op terms, he has worked as an associate product manager where he is working full-time now"},
    
    {name:'Noah Maccalum', imageURL:"images/team/noah.jpg",role:"Co-Founder",job:"Microsoft: Product Manager",program:"Nanotechnology Engineering 2015", email:"noahmacca@gmail.com", LinkedIn:"https://www.linkedin.com/pub/noah-maccallum/31/949/227",
     description:"Noah has done numerous co-ops at established instiutions including MIT and Harvard. He also has written numerous scientific papers. After working at Microsoft as product manager, his interest in tech grew and he is now a full-time product manager at Microsoft"},
    
    {name:'Dan Li', imageURL:"images/team/dan.jpg",role:"Outreach Advisor",job:"LinkedIn: Associate Product Manager",program:"Computer Science 2015", email:"", LinkedIn:"https://www.linkedin.com/pub/dan-li/35/a2b/5a9", description:"Dan has done co-ops at top tech companies including Bloomberg, Pinterest, Twitter, and Microsoft. He was also accepted to Next36, prestige program for budding entrepenuers. He is going to work at LinkedIn as full-time product manager"},
    
    {name:'Kartik Talwar', imageURL:"images/team/kartik.jpg",role:"Advisor",program:"4A Physics", email:"", LinkedIn:"https://www.linkedin.com/in/kartiktalwar", description:""},
    
    {name:'Kaivalya Gandhi', imageURL:"images/team/kaivalya.jpg",role:"Co-President",program:"2B Software Engineering", email:"kaivalya.gandhi@gmail.com", LinkedIn:"https://www.linkedin.com/in/kaivalyagandhi"},
    
    {name:'James Lindsay', imageURL:"images/team/james.png",role:"Co-President",program:"3B IT Management", email:"", LinkedIn:"https://www.linkedin.com/in/jamesbrandonlindsay"},
    
    {name:'Sammie Bae', imageURL:"images/team/sammie.jpg",role:"Technology Co-Director",program:"1B System Design Engineering", email:"baesammie@gmail.com", LinkedIn:"https://ca.linkedin.com/in/sammiebae", description:"I get excited about technology, data, and innovation. "},
    
    {name:'Reginald Suh', imageURL:"images/team/regi.jpg",role:"Technology Co-Director",program:"1B Computer Science", email:"rsuh@uwaterloo.ca", LinkedIn:"https://ca.linkedin.com/in/reginaldsuh"},
    
    {name:'Simran Jassal', imageURL:"images/team/simran.jpg",role:"CO-DIRECTOR OF PRODUCT VISION CHALLENGE & TECH",program:"1B System Design Engineering", email:"simran.jassal@hotmail.com", LinkedIn:"https://ca.linkedin.com/in/simranjassal"},
    
    {name:'Mike Hennessey', imageURL:"images/team/mike.jpg",role:"CONTENT & MARKETING CO-DIRECTOR",program:"3A Global Business & Digital Arts", email:"mikerjhen@gmail.com", LinkedIn:"https://ca.linkedin.com/in/mrjhenne"},
    
    {name:'Kaitlyn Yong', imageURL:"images/team/kaitlyn.jpg",role:"CO-DIRECTOR OF THE INNOVATION TREK",program:"1B Computer Science", email:"kaitlyn.taylor.yong@gmail.com", LinkedIn:"https://ca.linkedin.com/in/kaitlynyong"},
    // {name:'Shalin Upadhyay', imageURL:"images/team/regi.svg",role:"CO-DIRECTOR OF PRODUCT VISION CHALLENGE",program:"1B Computer Science", email:"", LinkedIn:""},
    {name:'Meram Riad', imageURL:"images/team/meram.jpg",role:"EXECUTIVE LEAD FOR THE PRODUCT VISION CHALLENGE",program:"2A Science and Business", email:"riad.meram@gmail.com", LinkedIn:"https://ca.linkedin.com/pub/meram-riad/b0/a77/5bb"},
    
    {name:'Jennifer Shen', imageURL:"images/team/jennifer.png",role:"OUTREACH DIRECTOR",program:"2B Computer Science", email:"jennifershen26@gmail.com", LinkedIn:"https://ca.linkedin.com/pub/jennifer-shen/96/9ba/78a"},
    
    {name:'Pedja Ristic', imageURL:"images/team/pedja.jpg",role:"MEDIA DIRECTOR",program:"Global Business & Digital Arts", email:"peda.ristic@live.ca", LinkedIn:"https://ca.linkedin.com/in/pedjaristic", description:"A Ballroom dancing tech fiend with a fetish for programming and design. Pedja’s aim is to paint the walls of user interaction with the colour of quality."},
    
    {name:'Eric Chung', imageURL:"images/team/eric.png",role:"GRAPHICS & DESIGN DIRECTOR",program:"Global Business & Digital Arts", email:"", LinkedIn:"https://ca.linkedin.com/in/ericchungdesign", description:"Passionate about design and creating a more user-friendly world. Looking forward to connecting with like-minded people and growing alongside this promising team."},
    
    {name: 'Akash Sant', imageURL:"images/team/akash.png",role:"Co-Director",program:"2B Software Engineering", email:"acsant@uwaterloo.ca", LinkedIn:"https://ca.linkedin.com/in/acsant", description:"Akash is excited to further develop his leadership and networking skills to empower students with exclusive opportunities to interact with management from top companies and through leaders across North America to nurture some of Waterloo's best future product managers and entrepreneurs."},
    
    {name:'Jeron Chan', imageURL:"images/team/jeron.jpg",role:"Content & Marketing",program:"2B Environment and Business", email:"", LinkedIn:"https://ca.linkedin.com/in/jeronchan"},
    // {name:'Ahilan Suriyakumaran', imageURL:"#",role:"Technology Co-Director", email:"", LinkedIn:"", description:"Keen interest in learning anything new, but even more interested in learning new technology. Excited about the growth of the club and being a part of a growing network and community in Waterloo."},
    
    {name:'Umesh Khanna', imageURL:"images/team/umesh.jpg",role:"Director of Tech Talks",program:"1B Electrical Engineering", email:"", LinkedIn:"https://ca.linkedin.com/in/umeshkhanna", description:""}
    ];
    $scope.portfolios = [
      {imageURL:"images/Gallery/1.jpg", header: "Quora", subheader: "Tech Talks"},
      {imageURL:"images/Gallery/2.jpg", header: "Square", subheader: "Tech Talks"},
      {imageURL:"images/Gallery/3.jpg", header: "Square", subheader: "Tech Talks"},
      {imageURL:"images/Gallery/4.jpg", header: "Mozilla", subheader: "Tech Talks"},
      {imageURL:"images/Gallery/5.jpg", header: "Mozilla", subheader: "Tech Talks"},
      {imageURL:"images/Gallery/6.jpg", header: "uWaterloo PMs", subheader: "Information Sessions"},
      {imageURL:"images/Gallery/8.jpg", header: "Club Photo", subheader: "Information Sessions"},
      {imageURL:"images/Gallery/13.jpg", header: "Vidyard", subheader: "Innovation Trek"},
      {imageURL:"images/Gallery/11.jpg", header: "Wellframe", subheader: "Tech Talks"},
      {imageURL:"images/Gallery/12.jpg", header: "Wellframe", subheader: "Tech Talks"},
      {imageURL:"images/Gallery/10.jpg", header: "Interview Prep", subheader: "Information Sessions"},
      {imageURL:"images/Gallery/14.jpg", header: "Google", subheader: "Innovation Trek"},
      {imageURL:"images/Gallery/9.jpg", header: "Interview Prep", subheader: "Information Sessions"},
      {imageURL:"images/Gallery/15.jpg", header: "BlackBerry", subheader: "Innovation Trek"},
      {imageURL:"images/Gallery/16.jpg", header: "BlackBerry", subheader: "Innovation Trek"},
    ];

    $scope.portfoliosClass = function (index){
      console.log($scope.portfolios[index].subheader);

      if($scope.portfolios[index].subheader=="Information Sessions") return "sessions";
      if($scope.portfolios[index].subheader=="Tech Talks") return "talk";
      if($scope.portfolios[index].subheader=="Innovation Trek") return "trek";
      
      
    }
  }]);