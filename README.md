<!-- implementing routing -->

1. npm i --save react-router-dom

2. wrap the <BrowserRouter> <App /> </BrowserRouter> from react-router-dom

3. <Routes>
      <Route path="/" element={<Component />} / > 
      <Route path="/parent" element={<Component />} >
      <Route path="/parent/child/:id" element={<Component />} / > 
      
       </Routes> 
      <Route path="*" element={<Component />} / > 
   </Routes>

4. <Link to =""></Link>
5. useNavigate(""/number) to redirect
   useLocation() for getting pathname
   useParams form dynamic data
