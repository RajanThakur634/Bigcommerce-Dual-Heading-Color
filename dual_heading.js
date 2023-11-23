# Bigcommerce-Dual-Heading-Color

# This code is used to Change the color of a product title (Dual Color). Add the below script in the footer

<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script>
  $(document).ready(function() {
    var productTitle = "{{product.title}}";
    var firstWord = productTitle.split(' ')[0];
    var restOfTitle = productTitle.substr(productTitle.indexOf(' ') + 1);

    $(".productView-title").html("<span style='color: black;'>" + firstWord + "</span> <span style='color: #4f478b;'>" + restOfTitle + "</span>");
  });
</script>
