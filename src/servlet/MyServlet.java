package servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/server")
public class MyServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        double a = Double.parseDouble(req.getParameter("a"));
        double b = Double.parseDouble(req.getParameter("b"));
        double c = Double.parseDouble(req.getParameter("c"));
        String s="";
        double Diskr=b*b-4*a*c;
        if (Diskr>=0)
        {
            double x1=(-b+Math.sqrt(Diskr))/(2*a);
            double x2=(-b-Math.sqrt(Diskr))/(2*a);
            s=s+"x1 = "+x1+", x2 = "+x2;
        }
        else
        {
            s="no roots";
        }
        resp.getWriter().write(s);
    }
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req, resp);
    }
}
