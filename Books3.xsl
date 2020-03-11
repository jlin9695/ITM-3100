<?xml version="1.0" encoding="ISO-8859-1" ?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
				<title>ITM3100 FL17 Books XML XSL Example</title>
			</head>
			<body style="font-family: times new roman, helvetica, sans-sarif; fontsize:14pt; background-color:cyan">
				<h3>ITM3100 FL17 Books XML XSL Example</h3>
				

				
				
				<xsl:for-each select="books/book">
					<div style="background-color:blue; color:yellow; padding:4px;">
						<xsl:value-of select="title" />
						<br />
					</div>
					
				<table>
					<thead>
						<th>ISBN</th>
						<th>Publisher</th>
						<th>Author(s)</th>
					</thead>
					<tbody>
						<tr>
							<td><xsl:value-of select="isbn" /></td>
							<td><xsl:value-of select="publisher" /></td>
							<td>
								<xsl:for-each select="authors/author">
									<xsl:value-of select="lastn" />,
									<xsl:value-of select="firstn" />
									<br />
								</xsl:for-each>
							</td>
						</tr>
					</tbody>
				</table>
				
				</xsl:for-each>
				
				
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>