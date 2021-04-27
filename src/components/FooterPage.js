function FooterPage() {
  return (
    <footer className="backgroud-dark-1">
      <div className="footer-copyright text-center py-3 text-white">
        <div className="container-fluid">
          &copy; {new Date().getFullYear()} Copyright:  TechnoGeekx.com 
        </div>
      </div>
    </footer>
  );
}
  
export default FooterPage;